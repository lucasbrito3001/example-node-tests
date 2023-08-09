pipeline {
    agent any

    environment {
        PROJECT_ID = 'quixotic-sunset-389718'
        CLUSTER_NAME = 'gke-development'
        LOCATION = 'us-east1-c'
        CREDENTIALS_ID = 'gke-development-config'
    }

    stages {
        stage('Build docker image') {
            steps {
                script {
                    dockerapp = docker.build("lucasbrito3001/example-test-node:${env.BUILD_ID}", '.')
                }
            }
        }

        stage('Push docker image') {
            steps {
                script {
                    /* groovylint-disable-next-line NestedBlockDepth */
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }

        stage('Deploy to GKE') {
            steps {
                /* groovylint-disable-next-line LineLength */
                sh "sed -i 's/lucasbrito3001/example-test-node:latest/lucasbrito3001/example-test-node:${env.BUILD_ID}/g' deployment.yaml"
                step([
                    $class: 'KubernetesEngineBuilder',
                    projectId: env.PROJECT_ID,
                    clusterName: env.CLUSTER_NAME,
                    location: env.LOCATION,
                    manifestPattern: 'deployment.yaml',
                    credentialsId: env.CREDENTIALS_ID,
                    verifyDeployments: true
                ])
            }
        }
    }
}
