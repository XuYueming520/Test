function test() {
    console.log("Button clicked!")
    alert("Hello, world!")
}

function pdf() {
    console.log("saving pdf!")
    
}

function json() {
    console.log("saving json!")
    // 要保存的字符串, 需要先将数据转成字符串
    const stringData = JSON.stringify([{name: "张三",age: 18}], null, 2)
    // dada 表示要转换的字符串数据，type 表示要转换的数据格式
    const blob = new Blob([stringData], {
        type: 'application/json'
    })
    // 根据 blob生成 url链接
    const objectURL = URL.createObjectURL(blob)

    // 创建一个 a 标签Tag
    const aTag = document.createElement('a')
    // 设置文件的下载地址
    aTag.href = objectURL
    // 设置保存后的文件名称
    aTag.download = "json文件.json"
    // 给 a 标签添加点击事件
    aTag.click()
    // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
    // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
    URL.revokeObjectURL(objectURL)
}
