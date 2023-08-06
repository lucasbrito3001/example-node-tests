pipeline {
    agent any

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

        stage('Deploy Kubernetes') {
            steps {
                withKubeConfig([credentialsId: 'KUBE_CONFIG']) {
                    sh 'sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin'
                    sh 'kubectl apply -f ./k8s/deployment.yaml'
                }
            }
        }
    }
}
