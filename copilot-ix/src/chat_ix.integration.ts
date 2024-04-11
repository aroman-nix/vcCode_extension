import axios from "axios";

export async function generate_test_file (file :Uint8Array, fileName: string): Promise<Uint8Array> {
   // LEFT RESULT SAMPLE, WE NEED TO INTEGRATE WITH CHAT IX API TO PUBLISH FILE
   // AND RECEIVE FILE 
   // BOTH IN  Uint8Array HERE
   // REST OF CODE IS WORKING
   
    // var formData = new FormData();
    // formData.append("file", new Blob([file]), fileName);
    // const result = await axios.post("TODO: Chat-iX URL", formData);
    // return new Uint8Array(await result.data.blob.arrayBuffer());
    return Uint8Array.from(Array.from("Chat ix tests would be here").map(x => x.charCodeAt(0)));
}