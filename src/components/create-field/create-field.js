import createTag from "@/utils/create-tag/create-tag"

function createCell(value, index) {
	const button = createTag("button", {
		text: value,
		className: "cell",
		attributes: { type: "button", "data-index": index },
	})

	return button
}

function createField(numbersArray) {
	const field = createTag("div", {
		className: "field",
	})

	field.append(numbersArray.map((value, index) => createCell(value, index)))

	return field
}

export default createField
