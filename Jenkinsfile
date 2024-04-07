pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('Build') {
            steps {
                // Install dependencies
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
