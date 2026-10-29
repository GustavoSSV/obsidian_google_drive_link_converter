import { Editor, Notice, Plugin } from 'obsidian';
import { driveLinkConverter, obsidianSyntax, driveLinkIFrame } from './drive';
import { DriveModal, MidiaModal } from './modal';

export default class DriveEmbedPlugin extends Plugin {
	async onload() {
		this.addRibbonIcon('link', 'Google Drive Link Converter', (_evt: MouseEvent) => {
			const editor = this.app.workspace.activeEditor?.editor;
			if (editor) {
				this.abrirModalImagem(editor);
			} else {
				new Notice("Abra uma nota primeiro");
			}
		});

		this.addCommand({
			id: "converter-link-drive",
			name: "Converter link do Google Drive selecionado",
			editorCallback: (editor) => {
				const selecionado = editor.getSelection();

				try {
					const linkEmbed = driveLinkConverter(selecionado);
					const resultado = obsidianSyntax(linkEmbed);
					editor.replaceSelection(resultado);
				} catch (erro) {
					new Notice("Link inválido");
				}
			},
		});

		this.addCommand({
			id: "inserir-imagem-drive",
			name: "Inserir imagem do Google Drive",
			editorCallback: (editor) => this.abrirModalImagem(editor),
		});

		this.addCommand({
			id: "inserir-midia-drive",
			name: "Inserir mídia do Google Drive como iframe",
			editorCallback: (editor) => this.abrirModalMidia(editor),
		});
	}
	abrirModalImagem(editor: Editor) {
		new DriveModal(this.app, (link, formato) => {
			try {
				const linkEmbed = driveLinkConverter(link);
				if (formato === "imagem") {
					editor.replaceSelection(obsidianSyntax(linkEmbed));
				} else {
					editor.replaceSelection(linkEmbed);
				}
			} catch (erro) {
				new Notice("Link inválido");
			}
		}).open();
	}
	abrirModalMidia(editor: Editor) {
		new MidiaModal(this.app, (link) => {
			try {
				const iframe = driveLinkIFrame(link);
				editor.replaceSelection(iframe);
			} catch (erro) {
				new Notice("Link inválido");
			}
		}).open()
	}
}
