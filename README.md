# sit323-2025-prac6p


SIT323/737 Task 6.1P – Kubernetes Deployment

Project Overview
A containerized Node.js calculator microservice deployed to a Kubernetes cluster using Minikube. This setup demonstrates container orchestration, scalability, and service exposure using Kubernetes primitives.

Tech Stack
- Node.js + Express
- Docker
- Kubernetes 
- kubectl CLI

Setup Instructions (Step-by-Step)

Step 1: Clone the Project

git clone https://github.com/pasanhasindu27/sit323-2025-prac6p
cd sit323-2025-prac6p

Step 2: Build and Push the Docker Image
docker build -t pasandocker123/advanced-calculator .
docker push pasandocker123/advanced-calculator

Step 3: Start a Minikube Cluster
minikube start
Ensure Minikube is running and kubectl is configured to talk to the Minikube cluster:
kubectl config use-context minikube


Step 4: Deploy to Kubernetes
Apply the deployment and service configuration:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Step 5: Check Resources
Verify that the deployment and pods are running:
kubectl get deployments
kubectl get pods
kubectl get services

Step 6: Access the App
Open the app in your browser:
minikube service node-app-service
This opens a URL such as:
http://192.168.49.2:30036
Depending on your setup, it may also be available via:
http://127.0.0.1:30036
Step 7: Test the App
In a browser or terminal, access the app:
curl http://192.168.49.2:30036
Expected Output:
Hello from Kubernetes Node.js App!

Step 8: Cleanup 
To stop and delete your Minikube cluster:
minikube delete

Files Included
- `Dockerfile`: Container definition
- `index.js`: Node.js server code
- `package.json`: Node.js dependencies
- `deployment.yaml`: Kubernetes deployment config
- `service.yaml`: Kubernetes service config
- `README.md`: Documentation
