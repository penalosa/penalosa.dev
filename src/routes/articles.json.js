import getFiles from "./_parsed";
export const get = async (req, res) => {
  const files = await getFiles();
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(files.map(({ path, data }) => ({ path, data }))));
};
