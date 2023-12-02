from flask import Flask, redirect, render_template, request
from config import ZOOM_API_KEY, ZOOM_API_SECRET

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('terapiaOnline.html')

@app.route('/iniciar_sesion', methods=['GET'])
def iniciar_sesion():
    link = request.args.get('link')
    
    # Aquí puedes usar ZOOM_API_KEY y ZOOM_API_SECRET en tu lógica de manejo de la sesión de Zoom
    # Por ejemplo, puedes autenticar con la API de Zoom utilizando estas credenciales

    # Redirigir directamente al enlace de Zoom (esto es un ejemplo, deberás utilizar la lógica correcta para iniciar sesión en Zoom)
    return redirect(link)

if __name__ == '__main__':
    app.run(debug=True)