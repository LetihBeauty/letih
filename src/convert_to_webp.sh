# Caminho para a pasta de imagens
IMAGE_DIR="./public/images"

# Verifica se o diretório existe
if [ -d "$IMAGE_DIR" ]; then
    # Itera por todas as imagens JPG e PNG na pasta
    for image in "$IMAGE_DIR"/*.{jpg,jpeg,png}; do
        # Verifica se o arquivo existe (necessário por causa do padrão de expansão do bash)
        if [ -f "$image" ]; then
            # Define o nome do arquivo de saída
            output="${image%.*}.webp"
            # Converte a imagem para WebP
            cwebp "$image" -o "$output"
            echo "Converted $image to $output"
        fi
    done
else
    echo "Directory $IMAGE_DIR does not exist."
fi


#  tornar o script executável
chmod +x convert_to_webp.sh

# Executar o script
# ./src/convert_to_webp.sh
