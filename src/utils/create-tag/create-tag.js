function createTag(tagName, options = {}) {
	const tag = document.createElement(tagName)
	const { className, text, attributes = {}, ...properties } = options

	Object.assign(tag, properties)

	if (text != undefined) tag.textContent = text
	if (className) {
		const classes = Array.isArray(className)
			? className
			: className.split(/\s+/)
		tag.classList.add(...classes)
	}

	for (let [name, value] of Object.entries(attributes)) {
		tag.setAttribute(name, value)
	}

	return tag
}

export default createTag
