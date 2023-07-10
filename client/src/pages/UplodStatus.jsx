import axios from "axios";
import React, { useContext, useState } from "react";
import { AccountContext } from "../Context/AccoutInfo";

export default function UplodStatus({ open }) {
  const close = () => {
    open(false);
  };
  const { account, status, setstatus } = useContext(AccountContext);
  // console.log(account);

  const uploadstatus = async () => {
    console.log("bouuto lnfjlksbafaslbfafa");
  };

  const [image, setImage] = useState("");
  const [Url, setUrl] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "WhatsappStatus");
    data.append("cloud_name", "dk7eckxlo");
    const imgdata = await fetch(
      " https://api.cloudinary.com/v1_1/dk7eckxlo/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (data.url) {
          console.log("here is the url");
          setUrl(data.url);
          console.log(data.url);

          await axios({
            method: "POST",
            url: "http://localhost:3001/status/upload",
            data: {
              name: account.name,
              email: account.email,
              url: data.url,
            },
            headers: {
              "Content-type": "application/json",
            },
          }).then((res) => {
            console.log(res);
            open(false);
            setstatus(true);
          });
        }
        console.log(data.url);
      });
  };

  return (
    <div className="bg-[#2c3b47] rounded-lg h-[500px] w-[90%]">
      <div
        className="flex flex-row-reverse text-white mt-3 mr-3 font-bold"
        onClick={close}
      >
        X
      </div>
      <div className="">
        <div className="text-center font-semibold text-[20px] text-[#ffffff]">
          Upload Status
        </div>
        <div className="mt-10 text-[15px] mx-auto">
          <div className="font-medium ml-12">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="text-[10px] "
            ></input>
          </div>
          <div className="text-center m-5 text-[#090e1e]">
            {image ? (
              <div>
                <div>
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-[200px] h-[200px] mx-auto"
                  />
                </div>
                <button
                  onClick={uploadImage}
                  className="bg-[#16282d] text-white p-2 w-[100%] md:w-[30%]
              mt-6  rounded-md font-semibold text-[12px] md:text-[15px] mb-4 hover:bg-[#10191c]"
                >
                  Upload
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
