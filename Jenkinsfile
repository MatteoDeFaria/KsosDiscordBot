pipeline {
    agent {
      docker {
        image 'node:16.14.2-alpine'
      }
    }

    environment {
      CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
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
    }
}