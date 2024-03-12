pipeline {
  agent any

  tools { nodejs: 'node' }

  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/MatteoDeFaria/KsosDiscordBot', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        echo 'Building ...'
        sh 'npm install'
      }
    }
  }
}
