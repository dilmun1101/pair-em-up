import createTag from "@/utils/create-tag/create-tag"
import getArrayOfNumbers from "@/utils/getArrayOfNumbers/getArrayOfNumbers"
import styles from "./field.module.css"
import createCell from "../cell/cell"

function createField(number) {
	const field = createTag("div", {
		className: styles.field,
	})

	const numbersArray = getArrayOfNumbers(number)

	field.append(...numbersArray.map((value, index) => createCell(value, index)))

	return field
}

export default createField
