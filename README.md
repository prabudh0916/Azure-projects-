📄 Azure AI Image Text Content Safety Analyzer

This project is a web-based dashboard that detects and analyzes harmful text from images using Microsoft Azure AI services. The application extracts text from images using Azure OCR (Computer Vision) and then evaluates the extracted text using Azure Content Safety to identify potentially unsafe or inappropriate content.

The system categorizes the analyzed text into the following safety categories:

Hate Speech

Violence

Self-Harm

Sexual Content

The project provides a simple and user-friendly interface where users can upload an image or capture one using their device camera, extract text from the image, and instantly analyze the text for harmful or unsafe content.

🚀 Features

📷 Image Upload or Camera Capture

🔍 Text Extraction using Azure OCR

🧠 Content Moderation using Azure Content Safety

📊 Categorization of Text into Safety Levels

🎨 Interactive and clean web dashboard

⚡ Real-time processing workflow

🧩 How It Works

The user uploads or captures an image containing text.

The image is sent to Azure Computer Vision OCR to extract the text.

The extracted text is then passed to Azure Content Safety API.

The API analyzes the text and returns safety scores for:

Hate

Violence

Self-harm

Sexual content

The results are displayed on the dashboard.

🛠️ Technologies Used

HTML5

CSS3

JavaScript

Microsoft Azure AI Vision (OCR)

Microsoft Azure Content Safety API

🔑 Requirements

To run this project, you need:

An Azure AI Vision (OCR) resource

An Azure Content Safety resource

You will need the following credentials from the Azure Portal:

OCR Endpoint
OCR API Key

Content Safety Endpoint
Content Safety API Key
▶️ How to Run the Project

Clone the repository

git clone https://github.com/your-username/project-name.git

Open the project folder.

Run the project by opening:

index.html

Enter your Azure endpoints and API keys in the dashboard.

Upload or capture an image to analyze the text content.

📌 Project Workflow
Image Input
     ↓
Azure OCR (Text Extraction)
     ↓
Extracted Text
     ↓
Azure Content Safety Analysis
     ↓
Content Categorization
📷 Use Cases

Content moderation systems

Social media monitoring

Image-based text analysis

AI safety filtering tools

Educational AI moderation tools

If you want, I can also give you a 🔥 much more attractive GitHub README version with:

badges

architecture diagram

demo screenshots section

project structure

future improvements
