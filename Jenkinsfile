pipeline {
    agent any

    environment {
        registryCredential = 'docker-hub-credentials'
        registry = 'tekmatteo/ksos-bot'
        discordToken = credentials('discord-token')
    }

    stages {
        stage('Stop and clean up old latest Docker Image') {
            steps {
                sh "docker stop $registry:latest"
                sh "docker rm $registry:latest"
                sh "docker rmi $registry:latest"
            }
        }

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
                sh "docker run -d --env DISCORD_TOKEN=${discordToken} ${registry}:latest"
            }
        }
    }
}
