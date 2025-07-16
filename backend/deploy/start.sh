
#!/bin/sh

python3 -m venv ./notepad_env
source ./notepad_env/bin/activate
pip install -r ./requirements.txt
python manage.py runserver 0.0.0.0:8000