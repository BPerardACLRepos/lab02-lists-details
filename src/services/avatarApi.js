export const getCharacters = async () => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters`);
    const json = res.json();
    return json;
}

export const getCharacter = async (id) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);
    const json = res.json();
    return json;
}