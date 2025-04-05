export const fetchJson = async() => {
	const res = await fetch('/assets/images.json');
	const data = await res.json();
	return data;
}

export const parseJson = (data) => {
	switch(data.format_version) {
		case 2:
			return data.images;
		default:
			return null;
	}
}

export default {
	fetchJson,
	parseJson
}