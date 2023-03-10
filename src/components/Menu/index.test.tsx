import { renderWithTheme } from "../../utils/tests/helpers";
import Menu from "./index";
import { fireEvent, screen } from "@testing-library/react";

describe("<Menu />", () => {
    it("should be a render menu", () => {
        renderWithTheme(<Menu />);

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument;
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument;
        expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument;
        expect(screen.getByRole("img", { name: /won games/i })).toBeInTheDocument();
    });

    it("should handle the open/close menu", () => {
        renderWithTheme(<Menu />);

        // Selecionar o elemento
        const fullMenuElement = screen.getByRole("navigation", { hidden: true });

        // Testar se ele está sendo escondido
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });

        // Testar se o menu está sendo aberto
        fireEvent.click(screen.getByLabelText(/open menu/i));
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
        expect(fullMenuElement).toHaveStyle({ opacity: 1 });

        // Testar se o menu está sendo fechado

        fireEvent.click(screen.getByLabelText(/close menu/i));
        expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    });

    it("should show register box when logged out", () => {
        renderWithTheme(<Menu />);

        expect(screen.getByText(/log in now/i)).toBeInTheDocument();
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    });

    it("should show wishlist and account when logged in", () => {
        renderWithTheme(<Menu username="user" />);

        expect(screen.getByText(/my account/i)).toBeInTheDocument();
        expect(screen.getByText(/wishlist/i)).toBeInTheDocument();

        expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
    });
});
