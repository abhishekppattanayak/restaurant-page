pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('Build') {
            steps {
                // Install dependencies
                sh 'cd ./restaurant-page/'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
    }
}
