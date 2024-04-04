#!/usr/bin/env/ groovy
pipeline {
    agent any

    environment {
        registryCredential = 'docker-hub-credentials'
        registry = 'tekmatteo/ksos-bot'
        containerName = 'KsosBot'
        discordToken = credentials('discord-token')
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
                sh "docker rmi $registry:latest"
            }
        }

        stage('Stop and clean up old latest Docker Image') {
            agent { node { label 'pi5' } }

            steps {
                script {
                    oldContainerId = sh(
                                        script: "docker ps -q -f name=$containerName",
                                        returnStdout: true
                                    )
                    if ( ${oldContainerId} != '' ) {
                        echo "Deleting container id: ${oldContainerId} ..."
                        echo "Deleting container name: $containerName ..."
                        sh "docker stop $containerName"
                        sh "docker rm $containerName"
                    } else {
                        echo "No container to delete..."
                    }

                    oldImageId = sh(
                                        script: "docker images -qf reference=$registry:latest",
                                        returnStdout: true
                                    )
                    if ( ${oldImageId} != '' ) {
                        echo "Deleting image id: ${oldImageId}..."
                        echo "Deleting image name: $registry:latest..."
                        sh "docker rmi $registry:latest"
                    } else {
                        echo "No image to delete..."
                    }
                }
            }
        }

        stage('Run Docker Image') {
           agent { node { label 'pi5' } }
            
            steps {
                sh "docker run -d --name $containerName --restart always --env DISCORD_TOKEN=$discordToken $registry:latest"
            }
        }
    }
}
