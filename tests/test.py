import functools


class TestClass(object):
    def __init__(self):
        self.test = ["a", 1, True, {"a": 1}]

    @functools.cache
    def static():
        return 5
