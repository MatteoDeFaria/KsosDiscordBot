#!/usr/bin/env/ groovy
pipeline {
    agent any

    environment {
        registryCredential = 'docker-hub-credentials'
        registry = 'tekmatteo/ksos-bot'
        containerName = 'KsosBot'
        discordToken = credentials('discord-token')
        sshHost = credentials("ssh-host")   
        sshUser = credentials("ssh-username")
        sshPassword = credentials("ssh-password")
    }

    stages {
        // stage('Stop and clean up old latest Docker Image') {
        //     steps {
        //         sh "docker stop $containerName"
        //         sh "docker rm $containerName"
        //         sh "docker rmi $registry:latest"
        //     }
        // }

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
            // node {
            //     def remote = [:]
            //     remote.name = credentials("ssh-name")
            //     remote.host = credentials("ssh-host")   
            //     remote.user = credentials("ssh-username")
            //     remote.password = credentials("ssh-password")
            //     remote.allowAnyHost = true
            // }
            
            steps {
                sh "ssh $sshUser@$sshHost"
                sh "$sshPassword"
                sh "docker run -d --name $containerName --restart always --env DISCORD_TOKEN=${discordToken} ${registry}:latest"
            }
        }
    }
}
