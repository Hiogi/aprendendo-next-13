import { ShowPosition, ShowType } from "@/types/types";
import Swal from "sweetalert2";

/**
 * Issue an alert in the application
 *
 * @example
 * showAlert('Há erros na aplicação', ShowType.Error, 'top', 2200);
 *
 * @param message - message for alert
 * @param showType [optional] - alert type
 * @param positionType [optional] - alert position
 * @param time {number} [optional] viewing time
 * @returns show on screen
 */
export function showAlert(
  message: string,
  showType?: ShowType,
  position?: ShowPosition,
  time?: number
) {
  const positionToast = position ? position : "top-end";
  const timeToast = time ? time : 1800;

  const Toast = Swal.mixin({
    toast: true,
    position: positionToast,
    showConfirmButton: false,
    timer: timeToast,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const iconToast = showType ? showType : ShowType.Success;
  return Toast.fire({
    icon: iconToast,
    title: message,
  });
}

/**
 * Ask the user a question
 *
 * @example
 * await askToQuestion('add', 'Incluir este Estado?');
 *
 * @param type - Type of question [add | edit | delete]
 * @param ask - Question for user.
 * @param askAbout - Detail of the question.
 * @returns show on screen
 *
 */
export async function askToQuestion(
  type: "add" | "delete" | "edit" | "other",
  ask?: string,
  askAbout?: string
) {
  let _ask = "";
  let _askAbout = "";
  let corOk = "#16a34a"; //'#3085d6';
  let corCancel = "#d33";
  let bottomLabel = "Sim";
  let figure = "ask.png";

  if (type === "add") {
    _ask = ask ? ask : "Deseja salvar?";
    _askAbout = askAbout ? askAbout : "";
    figure = "/ask.png";
    bottomLabel = "Sim, pode salvar!";
  } else if (type === "delete") {
    _ask = ask ? ask : "Confirma a exclusão?";
    _askAbout = askAbout ? askAbout : "Esta ação não poderá ser revertida";
    bottomLabel = "Sim, pode excluir!";
    corCancel = "#16a34a";
    corOk = "#d33";
    figure = "/askDelete.png";
  } else if (type === "edit") {
    _ask = ask ? ask : "Deseja editar?";
    bottomLabel = "Sim, quero atualizar!";
    figure = "/ask.png";
    _askAbout = askAbout ? askAbout : "";
  } else {
    _ask = ask ? ask : "";
    _askAbout = askAbout ? askAbout : "";
  }

  const result = await Swal.fire({
    title: _ask,
    text: _askAbout,    
    imageUrl: figure,

    showCancelButton: true,
    focusCancel: true,
    confirmButtonColor: corOk,
    cancelButtonColor: corCancel,
    confirmButtonText: bottomLabel,
    cancelButtonText: "Cancelar",
  })
    .then(result => {
      if (result.isConfirmed) {
        return true;
      }
      return false;
    })
    .catch(error => error.response.status);

  return result as Boolean;
}

/**
 * Message informing that the record is being deleted
 *
 * @example
 * showAlert('Há erros na aplicação', ShowType.Error, 'top', 2200);
 *
 * @returns show on screen
 */
export function showDelete() {
  Swal.fire({
    position: "top-end",
    icon: "warning",
    title: "Aguarde excluindo...",
    showConfirmButton: false,
    timer: 0,
  });
}
