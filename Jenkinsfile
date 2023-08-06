pipeline {
    agent any

    stages {
        stage("Build docker image") {
            steps {
                script {
                   dockerrapp = docker.build("lucasdbrito/example-test-node:${env.BUILD_ID}", ".")
                }
            }
        }
        stage("Push docker image") {
            steps {

            }
        }
        stage("Deploy") {
            steps {

            }
        }
    }
}