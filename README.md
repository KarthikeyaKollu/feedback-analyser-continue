# User Feedback Analyzer

This project is a user feedback analyzer built using a Large Language Model (LLM). It allows you to dynamically tag and retrieve feedback from a database. For example, you can use tags like `good` to get all positive feedback or `suggestions` to get all user suggestions.

## Features

- **Dynamic Tagging**: Tag feedback dynamically to categorize them (e.g., `good`, `suggestions`).
- **React Frontend**: A responsive and intuitive frontend built with React.
- **Python Backend**: A robust backend server built using Python to handle feedback analysis and storage.

## Tech Stack

- **Frontend**: React
- **Backend**: Python (Flask/Django/FastAPI)
- **Database**: SQLite/PostgreSQL/MySQL (choose as per your setup)
- **LLM**: OpenAI GPT-4 (or specify the model you used)

## Setup

### Prerequisites

- Node.js and npm installed
- Python 3.x installed
- Virtual environment (optional but recommended)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/user-feedback-analyzer.git
    cd user-feedback-analyzer
    ```

2. **Setup the backend**:
    ```sh
    cd backend
    python3 -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. **Run the backend server**:
    ```sh
    python app.py   # or the entry-point file you have
    ```

4. **Setup the frontend**:
    ```sh
    cd ../frontend
    npm install
    ```

5. **Run the frontend**:
    ```sh
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application via your web browser. Use the interface to input feedback and apply dynamic tags to categorize the feedback. Retrieve feedback by using the tags you have applied.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.




https://github.com/KarthikeyaKollu/feedback-analyser-continue/assets/108949445/bcb87358-d3ee-49aa-b8a8-ff91d13b5ef9

