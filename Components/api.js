export default function fetchRepositories(rates) {

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}?to={to}&from={from}&amount={amount}`)
    .then(response => {
      if (!response.ok)
        throw new Error("Error in fetch:" + response.statusText);

      return response.json()
    })

}