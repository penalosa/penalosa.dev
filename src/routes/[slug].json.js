import getFiles from "./_parsed";
export const get = async (req, res) => {
  const files = await getFiles();
  const { slug } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(files.find(f => f.data.href == slug)));
};
