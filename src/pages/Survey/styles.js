import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ps_bar: {
    width: "100%",
    maxHeight: 60,
    backgroundColor: "rgba(212,48,48,1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBar: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  text: {
    color: "#121212",
  },
  survey: {
    padding: 25,
  },
  question: {
    color: "#121212",
    height: 40,
    width: "100%",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 30,
  },
  questionLabel: {
    color: "#121212",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#C22A1F",
    borderRadius: 5,
    padding: 10,
    margin: 15,
  },
// ======== ======== ======== ======== ======== ======== ======== ========
  buttons:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 40,
  },
  seta: {
    top: 15,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
  avancar_btn: {
    width: 75,
    height: 75,
    backgroundColor: "#C22A1F",
    borderRadius: 20,
    position: "relative",
    alignSelf: "flex-end",
  },
  voltar_btn: {
    width: 75,
    height: 75,
    backgroundColor: "#C22A1F",
    borderRadius: 20,
    position: "relative",
    alignSelf: "flex-start",
  },
  avancar_btn_disabled: {
    width: 75,
    height: 75,
    backgroundColor: "#eb8b84",
    borderRadius: 20,
    position: "relative",
    alignSelf: "flex-end",
  },
});

export default styles;
