import ChangeAvatarButton from "./Component folder/ChangeAvatarButton.jsx";
import DeleteAvatarButton from "./Component folder/DeleteAvatarButton.jsx";
import ImageComp from "./Component folder/ImagesComponent.jsx";
import InputComp from "./Component folder/InputComponent.jsx";
import Button from "./Component folder/SaveChanges.jsx";
import TextArea from "./Component folder/Textarea.jsx";
import TitleandActionBtn from "./Component folder/TitleComponent.jsx";


export default function ProfileSettings(){

    const profileImage = [
        {
            imageID : 1,
            imagePic : <img src="/DashboardImage.jpg" alt="dashboard image" />,
            imgName : "Elizabeth Adetoba"
        }
    ]
    return(
        <div className="profile-Setngs-cont">
            <TitleandActionBtn 
            Title="Edit Profile"
            subTitle="Update Your Personal Information"
            />

            <div className="img-avatar-cont">
                <div>
                    <ImageComp 
                    images={profileImage}
                    />
                </div>
                <div className="avatar-ctas">
                    <ChangeAvatarButton 
                        AvatarbuttonText="Change Avatar"
                    />

                    <DeleteAvatarButton
                        AvatarDelbuttonText="Delete Avatar"
                    />
                </div>
            </div>

            <div className="input-grp-cont">
                <div className="inputs-groups">
                    <InputComp 
                        inputLabel="Change Email"
                        labelFor="email"
                        inputType="email"
                        inputName="email"
                        inputID="email"
                        inputText="aluko*****@gmail.com"
                    />

                    <InputComp 
                        inputLabel="Change Phone Number"
                        labelFor="number"
                        inputType="text"
                        inputName="number"
                        inputID="number"
                        inputText="0702456*****"
                    />

                    <TextArea 
                        txtLabel="Bio"
                        txtfor="bio"
                        txtname="bio"
                        txtID="bio"
                        txtHolder="Enter Bio"
                    />
                </div>

                <div>
                    <Button 
                    buttonText="Save Changes"
                    />
                </div>
            </div>
        </div>
    )
}