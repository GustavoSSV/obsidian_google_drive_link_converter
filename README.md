# Obsidian Google Drive Link Converter
Conversor de link do Google Drive para o Obsidian

## Funções
### Links Diretos de Imagem
- **Converte links de compartilhamento do Google Drive para links diretos de imagem**
- **Exemplo de link de compartilhamento:** 
	- `https://drive.google.com/file/d/e92053_2492_tjds+r3so_ri2/view?usp=sharing`
- **Saídas esperadas:**
	- Link direto de imagem: `https://lh3.googleusercontent.com/d/e92053_2492_tjds+r3so_ri2`
	- Incorporação de imagem na nota: `![](https://lh3.googleusercontent.com/d/e92053_2492_tjds+r3so_ri2)`

### Incorporação por iframe
- **Gera HTML de iframe para visualização de arquivos de mídia**
- **Exemplo de link de compartilhamento:** 
	- `https://drive.google.com/file/d/e92053_2492_tjds+r3so_ri2/view?usp=sharing`
- **Saída esperada:**
	- HTML de iframe: `<iframe src="https://drive.google.com/file/d/e92053_2492_tjds+r3so_ri2/preview" width="640" height="480"></iframe>`

### Instalação
- **Baixe os arquivos necessários**
	- `main.js`
	- `manifest.json`
	- `styles.css`
- **Crie uma pasta chamada `obsidian_google_drive_link_converter` dentro do diretório de plugins do Obsidian**
	- No Windows: `%APPDATA%\Obsidian\plugins\`
	- No macOS: `~/Library/Application Support/Obsidian/plugins/`
	- No Linux: `~/.config/Obsidian/plugins/`
- **Coloque os arquivos baixados na pasta criada**
- **Reinicie o Obsidian ou recarregue os plugins da comunidade e ative o plugin nas configurações de plugins da comunidade**
