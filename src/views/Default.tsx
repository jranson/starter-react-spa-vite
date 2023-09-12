import { faGear, faHeart, faSliders } from "@fortawesome/free-solid-svg-icons";
import { ButtonBasic } from "../components/controls/Buttons/ButtonBasic/ButtonBasic";
import TextInput from "../components/controls/TextInput/TextInput";
import Textarea from "../components/controls/Textarea/Textarea";
import Select from "../components/controls/Select/Select";
import { ButtonSplit } from "../components/controls/Buttons/ButtonBasic/ButtonSplit";
import BasicPanel from "../components/panels/basic/BasicPanel";
import LabelTag from "../components/controls/Labels/LabelTag";
import Checkbox from "../components/controls/Checkbox/Checkbox";
import RadioButton from "../components/controls/RadioButton/RadioButton";
import { PickListPanel } from "../components/controls/Pickers/PickListPanel/PickListPanel";
import { ButtonGroup } from "../components/controls/ButtonGroup/ButtonGroup";

export function Default() {

  const emptyEventFunc = () => {}

  const checkboxClicked = (e: MouseEvent) => {
    console.log("checkboxClicked", e)
  }

  const radioButtonClicked = (e: MouseEvent) => {
    console.log("radioButtonClicked", e)
  }

  return (
    <div>
      <h2>Default Page</h2>
      <hr />
      <h3>Example Components</h3>

      <br />

      <h4>Basic / HTML-ish Controls</h4>

      <BasicPanel className="filled width-xs" title="Hyperlinks">
        <a href="#">Unstyled/unclassed hyperlink</a>
        <br />
        <br />
        <a href="#" className="normal">Hyperlink with <LabelTag>normal</LabelTag> class</a>
      </BasicPanel>

      <br />

      <div style={{display: 'flex'}}>
        <BasicPanel className="filled width-fit" title="Buttons">
          <div style={{display: 'flex', flexWrap: 'wrap'}} className="mb-3">
            <ButtonBasic label="Blue (default)" className="me-4" />
            <ButtonBasic label="Green" color="green" className="me-4" />
            <ButtonBasic label="White on Red" color="red" className="me-4" labelColor="white" />
            <ButtonBasic label="Black on Yellow" color="yellow" className="color-dark me-4"/>
            <ButtonBasic label="Disabled" disabled={true}/>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap'}} className="mb-3">
            <ButtonBasic label="Outline" outline={true} className="me-4" />
            <ButtonBasic label="Green Outline" color="green" outline={true} className="me-4" />
            <ButtonBasic label="Red Outline" outline={true} color="red" className="me-4" />
            <ButtonBasic label="Yellow Outline" color="yellow" outline={true} className="me-4" />
            <ButtonBasic label="Disabled Outline" disabled={true} outline={true} />
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap'}} className="mb-3">
            <ButtonBasic label="Black / White (theme-based)" color="black" className="me-4" />
            <ButtonBasic label="Black / White Outline" color="black" outline={true} className="me-4" />
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap'}} className="mb-3">
            <ButtonBasic icon={faGear} label="Left Icon" className="me-4"/>
            <ButtonBasic icon={faSliders} label="Left Icon Outline" color="green" outline={true} className="me-4" />
            <ButtonBasic label="Caret" color="yellow" hasMenu={true} className="color-dark me-4"/>
            <ButtonSplit label="Split" icon={faHeart} color="red" labelColor="white" className="me-4" />
            <ButtonSplit label="Split Outline" outline={true} color="black" />
          </div>
        </BasicPanel>
        <BasicPanel className="filled width-fit" title="Checkboxes / Radio Buttons">
          <div>
            <Checkbox label="Pre-checked with clickable Label" defaultChecked={true} onClick={checkboxClicked} />
            <Checkbox />
            <Checkbox disabled={true} label="Disabled Checkbox with Label"/>
          </div>
          <hr />
          <div>
            <RadioButton label="Pre-selected with clickable Label" name="radioGroup1"/>
            <RadioButton name="radioGroup1" defaultChecked={true} onClick={radioButtonClicked} />
            <RadioButton label="Disabled Radio Button with Label" disabled={true}/>
          </div>
        </BasicPanel>
      </div>

      <br />

      <div style={{display: 'flex'}}>
        <BasicPanel className="width-sm framed" title="Text Input / Textarea">
          <div>
            <TextInput placeholder="placeholder text" />
            <br />
            <br />
            <TextInput placeholder="disabled text input" disabled={true} />
            <br />
            <br />
            <TextInput placeholder="wide text input" className="wide" defaultValue="Wide text input w/ default value" />
            <br />
            <br />
            <Textarea placeholder="textarea" defaultValue="HELLO!" />
          </div>
        </BasicPanel>

        <BasicPanel className="ms-3 width-md framed" title="Select">
          <h5>Select</h5>
          <div>
            <Select placeholder="placeholder" />
            <br />
            <Select placeholder="wide select" className="wide" />
            <br />
            <Select placeholder="disabled select" disabled={true} />
          </div>
        </BasicPanel>
      </div>

      <br />

      <h4>Complex Controls</h4>

      <div style={{display: 'flex'}}>
        <BasicPanel className="ms-3 width-xs framed" title="PickList Panel">
          <PickListPanel
              defaultValue={'24h'}
              values={['1h', '3h', '6h', '8h', '12h', '24h', '36h', '3d', '5d', '1w', '2w', '4w', '6w', '8w', '12w', '16w', '26w']}
              onClick={emptyEventFunc}
            />
        </BasicPanel>

        <BasicPanel className="ms-3 width-xs filled" title="Button Groups">
          <div>
          Regular Size
          <ButtonGroup
            label="Choose an Option"
            groupName="exampleGroup"
            defaultValue={true}
            onClick={() => {}}
            buttonClass="px-3"
            buttons={[
              { caption: 'True', value: true },
              { caption: 'False', value: false },
              { caption: "What?", value: 1 }
            ]} />
          </div>
          <br />
          <div>
          Small Size / Blue
          <ButtonGroup
            label="Choose an Option"
            groupName="exampleGroup2"
            defaultValue={true}
            onClick={() => {}}
            buttonClass="px-3"
            buttonSize="sm"
            buttonColor="blue"
            buttons={[
              { caption: 'True', value: true },
              { caption: 'False', value: false }
            ]} />
          </div>
        </BasicPanel>
      </div>


    </div>

  )
}
