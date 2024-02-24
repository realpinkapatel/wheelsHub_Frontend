import './index.model.css'
import CustomInput from "../../Components/Elements/CustomInput"
import CustomParagraph from '../../Components/Elements/CustomParagraph'
import CustomButton from '../../Components/Elements/CustomButton'

function card(props) {

    return (
        <div >
            <div className="card" >

                <CustomParagraph
                    className="ac-account-Heading"
                >Name </CustomParagraph>
                <CustomInput
                    type="text"
                    value="Pinka"
                    className="ac-NameInput"
                />
                <div>
                    <CustomParagraph
                        className="ac-account-Heading"
                    >Email </CustomParagraph>
                    <CustomInput
                        type="text"
                        value="pk@gmail.com"
                        className="ac-emailInput" />
                </div>
                <div>
                    <CustomParagraph
                        className="ac-account-Heading"
                    >Phone </CustomParagraph>
                    <CustomInput
                        type="text"
                        value="9874563210"
                        className="ac-PhoneInput"
                    />
                </div>
                <div>
                    <CustomParagraph
                        className="ac-account-Heading"
                    >City</CustomParagraph>
                    <CustomInput
                        type="text"
                        value="9874563210"
                        className="ac-emailInput"
                    />
                </div>
                <div style={{ display: "flex" }}>
                    <CustomParagraph
                        className="ac-Gendert-Heading"
                    >Gender :</CustomParagraph>
                    <label style={{ marginLeft: "1.5rem" }}>
                        Female<input type="radio" name="gender" value="female" style={{ marginLeft: ".5rem" }} />
                    </label>

                    <label style={{ marginLeft: "2.5rem" }}>
                        Male<input type="radio" name="gender" value="male" style={{ marginLeft: ".5rem" }} />
                    </label>

                </div>
                <div className='ac-btn-bd'>
                    <CustomButton className="my-account-cencel-btn">Cencel</CustomButton>
                    <CustomButton className="my-account-cencel-btn">Change</CustomButton>
                </div>
            </div>


        </div>
    )
}
export default card