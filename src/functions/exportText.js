export default (data, fileName) => {
    var a = document.createElement("a");
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}