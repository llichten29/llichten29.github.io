pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token')
    }

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Clonage du repo') {
            steps {
                git 'https://github.com/llichten29/llichten29.github.io.git'
            }
        }

        stage('Installation des dépendances') {
            steps {
                sh 'npm install'
            }
        }

        stage('Analyse SonarQube') {
            steps {
                withSonarQubeEnv('My Sonar Server') {
                    sh 'npx sonar-scanner -Dsonar.login=$SONAR_TOKEN'
                }
            }
        }

        stage('Vérification HTML/CSS/JS') {
            steps {
                sh '''
                npx eslint js/
                npx stylelint "css/**/*.css"
                npx htmlhint .
                '''
            }
        }

        stage('Déploiement (si besoin)') {
            steps {
                sh '''
                git config user.name "jenkins"
                git config user.email "jenkins@localhost"
                git add .
                git commit -m "Déploiement auto via Jenkins" || echo "rien à committer"
                git push origin main
                '''
            }
        }
    }
}