import { App, Modal, Setting } from "obsidian";

export class DriveModal extends Modal {
	link = "";

	constructor(app: App, private aoEscolher: (link: string, formato: "link" | "imagem") => void) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h3", { text: "Converter link de imagem do Google Drive" });

		new Setting(contentEl)
			.setName("Link do Drive")
			.addText(texto => texto
				.setPlaceholder("https://drive.google.com/file/d/...")
				.onChange(valor => { this.link = valor; }));

		new Setting(contentEl)
			.addButton(btn => btn
				.setButtonText("Inserir link")
				.onClick(() => {
					this.aoEscolher(this.link, "link");
					this.close();
				}))
			.addButton(btn => btn
				.setButtonText("Inserir como imagem")
				.setCta()
				.onClick(() => {
					this.aoEscolher(this.link, "imagem");
					this.close();
				}))
	}

	onClose() {
		this.contentEl.empty();
	}
}

export class MidiaModal extends Modal {
	link = "";
	
	constructor(app: App, private aoEscolher: (link: string) => void) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h3", { text: "Incorporar mídia do Google Drive" });

		new Setting(contentEl)
			.setName("Link do Drive")
			.addText(texto => texto
				.setPlaceholder("https://drive.google.com/file/d/...")
				.onChange(valor => { this.link = valor; }));

		new Setting(contentEl)
			.addButton(btn => btn
				.setButtonText("Inserir como iframe")
				.setCta()
				.onClick(() => {
					this.aoEscolher(this.link);
					this.close();
				}))
	}

	onClose() {
		this.contentEl.empty();
	}
}