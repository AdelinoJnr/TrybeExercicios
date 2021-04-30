const techList = (array, nome) => {
  if (array.length === 0) return 'Vazio!';
  
  return array.sort().reduce((acc, curr) => {
    const entries = {
      tech: curr,
      name: nome,
    };
    acc.push(entries);
    return acc;
  }, []);
};

module.exports = techList;