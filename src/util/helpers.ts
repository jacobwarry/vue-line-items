export function convertToUnit(str: string | number | null | undefined, unit = "px"): string | undefined {
	if (str == null || str === "") {
		return undefined
	} else if (isNaN(+str!)) {
		return String(str)
	} else {
		return `${Number(str)}${unit}`
	}
}

export function getObjectValueByPath(obj: any, path: string, fallback?: any): any {
	// credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
	if (obj == null || !path || typeof path !== "string") return fallback
	if (obj[path] !== undefined) return obj[path]
	path = path.replace(/\[(\w+)\]/g, ".$1") // convert indexes to properties
	path = path.replace(/^\./, "") // strip a leading dot
	return getNestedValue(obj, path.split("."), fallback)
}

export function getNestedValue(obj: any, path: (string | number)[], fallback?: any): any {
	const last = path.length - 1

	if (last < 0) return obj === undefined ? fallback : obj

	for (let i = 0; i < last; i++) {
		if (obj == null) {
			return fallback
		}
		obj = obj[path[i]]
	}

	if (obj == null) return fallback

	return obj[path[last]] === undefined ? fallback : obj[path[last]]
}