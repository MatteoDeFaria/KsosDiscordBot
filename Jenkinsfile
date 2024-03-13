pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build . -t ksos-bot'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }

        stage('Run') {
            steps {
                echo 'Runing....'
                sh 'docker run -d ksos-bot'
            }
        }
    }
}