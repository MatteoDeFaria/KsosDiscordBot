pipeline {
    agent any

    environment {
        registryCredential = 'docker-hub-credentials'
        registry = 'tekmatteo/ksos-bot'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Deploy Docker Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Clean up Docker Image') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }

        stage('Run Docker Image') {
            steps {
                script {
                    dockerImage.run()
               }
            }
        }
    }
}
