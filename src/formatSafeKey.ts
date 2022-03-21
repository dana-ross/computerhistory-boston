export default function formatSafeKey(components : Array<string>) {

    function safeCSSId(x : string) {
        return encodeURIComponent(x)
          .toLowerCase()
          .replace(/\.|%[0-9a-z]{2}/gi, '');
      }

    return components.map(safeCSSId).join('-');
}