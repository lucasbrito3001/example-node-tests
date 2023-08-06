pipeline {
    agent any

    stages {
        stage("Build docker image") {
            steps {
                script {
                   dockerapp = docker.build("lucasdbrito/example-test-node:${env.BUILD_ID}", ".")
                }
            }
        }

        stage("Push docker image") {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "DOCKER_HUB") {
                        dockerapp.push("latest")
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
        // stage("Deploy") {
        //     steps {
                
        //     }
        // }
    }
}