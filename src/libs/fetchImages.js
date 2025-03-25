export default async() => {
	const res = await fetch('/assets/images.json');
	const data = await res.json();
	return data;
}