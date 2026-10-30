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

export class PropriedadeModal extends Modal {
	link = "";
	propriedadeEscolhida = "";
	propriedadeNova = "";

	constructor(app: App, private propriedades: string[], private aoEscolher: (link: string, propriedade: string) => void) {
		super(app);
		this.propriedadeEscolhida = propriedades.includes("foto") ? "foto" : (propriedades[0] ?? "");
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h3", { text: "Adicionar link do Google Drive a uma propriedade da nota" });

		new Setting(contentEl)
			.setName("Link do Drive")
			.addText(texto => texto
				.setPlaceholder("https://drive.google.com/file/d/...")
				.onChange(valor => { this.link = valor; }));

		if (this.propriedades.length > 0) {
			new Setting(contentEl)
				.setName("Escolher propriedade existente")
				.addDropdown(drop => {
					this.propriedades.forEach(p => drop.addOption(p, p));
					drop.setValue(this.propriedadeEscolhida);
					drop.onChange(valor => { this.propriedadeEscolhida = valor; });
				});
		}

		new Setting(contentEl)
			.setName("Ou crie uma nova propriedade")
			.setDesc("Se você criar uma nova propriedade, ela será usada em vez da propriedade existente selecionada.")
			.addText(texto => texto
				.setPlaceholder("Nome da propriedade")
				.onChange(valor => { this.propriedadeNova = valor; }));

		
		new Setting(contentEl)
			.addButton(btn => btn
				.setButtonText("Adicionar propriedade")
				.setCta()
				.onClick(() => {
					const propriedade = this.propriedadeNova.trim() || this.propriedadeEscolhida || "foto";
					this.aoEscolher(this.link, propriedade);
					this.close();
				}))
	}

	onClose() {
		this.contentEl.empty();
	}
}