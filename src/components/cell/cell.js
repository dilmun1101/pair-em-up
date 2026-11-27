import createTag from "@/utils/create-tag/create-tag"
import styles from "./cell.module.css"

function createCell(value, index) {
	const button = createTag("button", {
		text: value,
		className: styles.cell,
		attributes: { type: "button", "data-index": index },
	})

	return button
}

export default createCell
