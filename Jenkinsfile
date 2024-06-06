pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'pipelinee'
    }

    stages {
      stage ('Build') {
        steps {
          script {
            docker.build DOCKER_IMAGE
          }
        }
      }
      stage ('Test') {
        steps {
          script {
            docker.image(DOCKER_IMAGE).inside {
              sh 'npm install'
              sh 'npm test'
            }
          }
        }
      }
      stage ('Deploy') {
        steps {
          script {
            docker.image(DOCKER_IMAGE).run '-p 3000:3000 -d'
          }
        }
      }
    }
}