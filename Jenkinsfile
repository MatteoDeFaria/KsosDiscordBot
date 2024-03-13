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
                    dockerImage = docker.build("${registry}:${env.BUILD_NUMBER}")
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

         stage('Cleaning up') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }

        // stage('Build') {
        //     steps {
        //         echo 'Building..'
        //         sh 'docker build . -t ksos-bot'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         echo 'Testing..'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }

        // stage('Run') {
        //     steps {
        //         echo 'Runing....'
        //         sh 'docker run -d ksos-bot'
        //     }
        // }
        //}
}