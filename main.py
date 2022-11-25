def on_forever():
    if input.button_is_pressed(Button.A):
        for index in range(5):
            basic.show_number(index)
basic.forever(on_forever)
