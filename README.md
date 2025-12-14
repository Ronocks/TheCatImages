Welcome to the Readme of how to create your very own cat image generator to impress your friends and family
Bellow will be a step by step guide on how to deploy this application for yourself
Steps:
1- Download application and clone repository to local folder
2- Check all files are up to date and accessable
3- Enable your apis : [gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com storage.googleapis.com ]
4- Create your google cloud project and set to active project in terminal
5- Initialize your package.json : [npm init -y]
6- Create your bucket to store images: [gsutil mb -l europe-west2 gs://thefunnycatimages-cat10630766]
7- Add your images to bucket: [gsutil cp .\catimages\* gs://thefunnycatimages-cat10630766]
8- Make your images bucket public to view: [gsutil iam ch allUsers:objectViewer gs://thefunnycatimages-cat10630766]
9- Test your application locally to see if everything works on localhost: [node app.js]
10- Create empty git repositorty and add everything to it: [git add., git comment, git push -u origon main]
11- On your google cloud project console enable triggers and set active trigger to your github cloudbuild.yaml file
12- Test if this works by changing something locally and pushing it to github
13- Start cloud run for your finished application [gcloud run services describe random-image-app   --region europe-west2   --platform managed]
14- Have fun with your new application
