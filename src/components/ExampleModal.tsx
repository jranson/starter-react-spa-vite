import ModalBasic from "./modals/basic/ModalBasic"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

type ExampleModalProps = {
  closer?: any
  closeable?: boolean
}

export default function ExampleModal(props: ExampleModalProps) {

  return (
    <ModalBasic
      closer={props.closer}
      closeLabel="Cancel"
      headerText="Example Modal"
      headerIcon={faExclamationCircle}
      sz="md"
    >
      This is the content body of our Modal!
      <br />
      <br />
      Enjoy!
      <br />
      <br />
    </ModalBasic>
  )

}