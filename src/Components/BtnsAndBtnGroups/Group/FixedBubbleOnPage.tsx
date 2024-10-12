// 這個 component 目前只在 page template 中使用了一次，因此可以放心修改


import "./FixedBubbleOnPage.scss"
import { toggleClass } from "../../Functions/ToggleClassName"


function FixBtnsOnPage() {
  return (<>
    <div className="lili-fixed-btns-on-page" onClick={toggleClass("activated")}>
      <div className="bg"></div>

      <div className="material-symbols-outlined icon">sms</div>

      <div className="menu">
        <p>如欲索取報價，請點擊下圖，通過 WhatsApp 聯繫與專員聯絡，我們將為您提供專屬的個性化服務。</p>

        <a className="btn" href="">
          <img src="https://file.notion.so/f/f/af83eaeb-cb25-4274-875a-4a0e39b7bf16/619f69fd-e51d-4904-8ea9-b6980e380b4e/image.png?table=block&id=7cc4c244-b949-4368-9163-45a0a798e6d9&spaceId=af83eaeb-cb25-4274-875a-4a0e39b7bf16&expirationTimestamp=1724148000000&signature=SckNclcD1d7CwbEX4-r7DnYlUz9iXV6KYJxMtazwzUk&downloadName=image.png" alt="" />
        </a>
      </div>
    </div>
  </>)
}


export default FixBtnsOnPage