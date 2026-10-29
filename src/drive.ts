function extrairIdDrive(linkDrive: string): string {
	const id = linkDrive.match(/\/d\/([\w-]+)/)?.[1];
	if (id) {
		return id;
	}
	throw new Error("Link inválido");
}

export function driveLinkConverter(linkDrive: string): string {
	return "https://lh3.googleusercontent.com/d/" + extrairIdDrive(linkDrive);
}

export function obsidianSyntax(linkEmbed: string): string {
	return `![](${linkEmbed})`;
}

export function driveLinkIFrame(linkDrive: string): string {
	return `<iframe src="https://drive.google.com/file/d/${extrairIdDrive(linkDrive)}/preview" width="640" height="480"></iframe>`;
}